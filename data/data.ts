interface fetchParamsInterface {
   next?: {
      revalidate?: number;
   };
}

export async function fetchData(
   url: string,
   fetchParams?: fetchParamsInterface,
) {
   try {
      const response = await fetch(url, fetchParams || {});
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);

      throw error;
   }
}

export function getCategories() {
   return ["All", "Casual", "Formal", "Party", "Gym"];
}
