import { Button } from "@mui/material";
// import { useTextContext } from "./MyContext";

import { useDispatch } from "react-redux";
import { removeUserName, useSelectorUserDetail } from "./state/slice/userSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  const { userName } = useSelectorUserDetail();

  const onHomePageButtonClick = () => {
    dispatch(removeUserName());
  };
  // const userName = useSelector((state) => state.users.userName);

  return (
    <div>
      Home Page 🏠
      <span>{userName}</span>
      <Button variant="contained" onClick={onHomePageButtonClick} className="">
        Hello World
      </Button>
    </div>
  );
};
