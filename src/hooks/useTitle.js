import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Seoul Kitchenista`;

    },[title])
};

export default useTitle;