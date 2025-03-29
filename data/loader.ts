export function getFilteredProducts(prevState: any, formData: FormData) {
   const filters = {
      type: formData.getAll("type"),
      price: formData.getAll("price"),
      color: formData.getAll("color"),
      size: formData.getAll("size"),
      style: formData.getAll("style"),
   };

   let searchStr = "";
   for (const filtersKey in filters) {
      const typedFiltersKey = filtersKey as keyof typeof filters;
      if (filters[typedFiltersKey].join(",")) {
         searchStr +=
            filtersKey + "=" + filters[typedFiltersKey].join(",") + "&";
      }
   }

   //фильтрацию делать через ссылку

   return { ...prevState, data: searchStr.slice(0, -1) };
}
