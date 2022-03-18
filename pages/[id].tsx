import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { Home } from "../models";

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  return { props: { id } };
}

type Inputs = {
  size: number;
  rooms: number;
  rent: number;
  tenant: string;
};

function Home({ id }: { id: string }): JSX.Element {
  const [home, setHome] = useState<Home>();
  const [formSuccess, setFormSucces] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isDirty },
  } = useForm<Inputs>();

  async function fetchHome() {
    try {
      const response = await fetch(`/api/tenancies/${id}`);

      const data = await response.json();

      setHome(data.tenancy);
    } catch (err) {
      throw new Error("Error: " + err);
    }
  }

  const onSubmit = async (data: Inputs) => {
    try {
      const request = await fetch(`/api/tenancies/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      setFormSucces(isSubmitted);
    } catch (err) {
      throw new Error("Error: " + err);
    } finally {
      setTimeout(() => {
        setFormSucces(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!home) return <div></div>;

  return (
    <div className="py-6">
      <section>
        <h2 className="mb-6 text-base sm:text-lg lg:text-xl xl:text-2xl">
          {home.address}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
          <div className="mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="tenant"
            >
              Tenant
            </label>
            <input
              {...register("tenant")}
              id="tanant"
              defaultValue={home.tenant}
              type="text"
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="sqm"
            >
              Square meter
            </label>
            <input
              {...register("size")}
              id="sqm"
              defaultValue={home.size}
              type="number"
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="rooms"
            >
              Number of rooms
            </label>
            <input
              {...register("rooms")}
              id="rooms"
              defaultValue={home.rooms}
              type="number"
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="rent"
            >
              Rent amount (in DKK)
            </label>
            <input
              {...register("rent")}
              defaultValue={home.rent}
              id="rent"
              type="number"
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="flex items-center justify-end gap-3 text-right">
            {formSuccess && <p className="text-green-600">Updated!</p>}
            <Button
              disabled={!isDirty}
              type="submit"
              className={`${!isDirty && "opacity-50 cursor-not-allowed"}`}
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
