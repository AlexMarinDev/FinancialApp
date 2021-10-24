import { useCallback, useEffect, useState } from "react";

const useCustomers = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCustomers = useCallback(async () => {
    try {
      const { data } = await getMockCustomers();
      setCustomers(data.customers);
      setLoading(false);
    } catch (error) {
      setError("Error returning customers");
      setLoading(false);
    }
  }, [getMockCustomers]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return { customers, error, loading };
};

export default useCustomers;

const getMockCustomers = (): any => new Promise(resolve => {
  setTimeout(() => {
    resolve(mockCustomersData);
  }, 500);
});

const mockCustomersData = {
  data: {
    customers: [
      {
        "id": 1,
        "first_name": "Britt",
        "last_name": "Baumbach",
        "address": "4195 Reuben Fort",
        "zip_code": "56942-9854",
        "city": "Kriston",
        "country": "French Polynesia",
        "country_code": "PF",
        "company": "Britania Inc.",
      },
      {
        "id": 2,
        "first_name": "Dannielle",
        "last_name": "Zemlak",
        "address": "956 Brunilda Road",
        "zip_code": "75676-4605",
        "city": "Tylermouth",
        "country": "Vanuatu",
        "country_code": "VU",
        "company": "DanielsLand Inc.",
      },
      {
        "id": 3,
        "first_name": "Eldora",
        "last_name": "Wiza",
        "address": "20620 Nader Street",
        "zip_code": "50651-3912",
        "city": "Baumbachfurt",
        "country": "Mauritania",
        "country_code": "MR",
        "company": "Eldorado LLC",
      },
      {
        "id": 4,
        "first_name": "Jeannie",
        "last_name": "Flatley",
        "address": "1320 Evelynn Dam",
        "zip_code": "57824",
        "city": "Gleasonview",
        "country": "Montserrat",
        "country_code": "MS",
        "company": "Juniper Inc.",
      }],
  },
};
