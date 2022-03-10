import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen/";
import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppForm,
  SubmitButton,
  AppFormField,
  AppFormPicker,
  FormImagePicker,
} from "../components/Forms";
import listingsApi from "../../app/api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const listCategories = [
  {
    label: "Furniture",
    id: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    label: "Clothing",
    id: 2,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  {
    label: "Cameras",
    id: 3,
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    label: "Cars",
    id: 3,
    backgroundColor: "#fd9644",
    icon: "car",
  },
  {
    label: "Games",
    id: 3,
    backgroundColor: "#26de81",
    icon: "cards",
  },
  {
    label: "Sports",
    id: 3,
    backgroundColor: "#45aaf2",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    id: 3,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

function ListingEditScreen() {

  const location = useLocation()
const [uploadVisible, setUploadVisible] = useState(false);
const [progress, setProgress] = useState(0);

const upLoadListing =  async(values, {resetForm}) =>{
  setProgress(0)
  setUploadVisible(true)
  const response = await listingsApi.sendListings({...values, location}, (progress => setProgress(progress)))


  if(!response.ok)  {
    setUploadVisible(false)
   return  alert('Could not save the listing')
  }
resetForm()
}

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone = {()=> setUploadVisible(false)} progress = {progress} visible = {uploadVisible}/>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={upLoadListing}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={"images"} />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Categories"
          listCategories={listCategories}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginBottom: 20,
    marginTop: 50,
  },
});

export default ListingEditScreen;
