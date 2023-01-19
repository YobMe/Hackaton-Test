import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../reduxToolkit/features/categorySlice";
import { getData } from "./../utils/data-storage";

export const useSavedData = () => {
  const dispatch = useDispatch();

  const getSavedData = async () => {
    const data = await getData("categories");
    console.log("🚀 ~ file: useSavedData.ts:11 ~ getSavedData ~ data", data)
    if(data != null){
      dispatch(setCategories(data));
    }
  };

  useEffect(() => {
    getSavedData();
  }, []);
};
