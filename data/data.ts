export async function fetchData(url: string) {
   try {
      const response = await fetch(url);
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
