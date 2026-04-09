import { useContext } from "react";
import { NewsContext } from "./NewsContext";

export const useNewsContext = () => useContext(NewsContext);