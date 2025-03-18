export function getFilteredProducts(prevState: any, formData: FormData) {
   const filters = {
      clothingType: formData.getAll("clothingType"),
      price: formData.get("price"),
      color: formData.getAll("color"),
      size: formData.getAll("size"),
      style: formData.getAll("style"),
   };
   console.log(filters);

   return { data: null };
}
