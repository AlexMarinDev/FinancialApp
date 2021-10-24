import { useCallback, useEffect, useState } from "react";

const useMyCompanies = () => {
  const [myCompanies, setMyCompanies] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchMyCompanies = useCallback(async () => {
    try {
      const { data } = await getMockCompanies();
      setMyCompanies(data.myCompanies);
      setLoading(false);
    } catch (error) {
      setError("Error returning myCompanies");
      setLoading(false);
    }
  }, [getMockCompanies]);

  useEffect(() => {
    fetchMyCompanies();
  }, [fetchMyCompanies]);

  return { myCompanies, error, loading };
};

export default useMyCompanies;

const getMockCompanies = (): any => new Promise(resolve => {
  setTimeout(() => {
    resolve(mockMyCompaniesData);
  }, 500);
});

const mockMyCompaniesData = {
  data: {
    myCompanies: [
      {
        "id": 1,
        name: "Company A",
      },
      {
        "id": 2,
        name: "Company B",
      },
      {
        "id": 3,
        name: "Company C",
      },
      {
        "id": 4,
        name: "Company D",
      }],
  },
};
