import apiClient from "./client";

const endPoint = "/listings";


const getListings = () => apiClient.get(endPoint);

const sendListings = (values, onUploadProgress) => {

  const data = new FormData()
  data.append('title', values.title);
  data.append('price', values.price);
  data.append('categoryId', values.category.id);
  data.append('description', values.description);

values.images.forEach((image, index) =>  data.append('images', {
    name: `${values.title}${index}`,
    type: 'image/jpeg',
    uri: image
  }))

if (values.location)
  data.append('location', JSON.stringify(values.location))

  return apiClient.post(endPoint, data, {
  onUploadProgress: progress => onUploadProgress(progress.loaded/progress.total)
})
}

export default {
  getListings,
  sendListings,
};
