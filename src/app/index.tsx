import React, {FC} from "react";

import Header from "./components/Header";
import MyRoutes from "./routes";

const App: FC = () => (
    <div>
        <Header />
        <MyRoutes />
    </div>
  );

export default App;
