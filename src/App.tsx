import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "pages/index";
import News from "pages/news";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "store";
import { sagaMiddleware, rootSaga } from "store/saga";
import { Provider } from "react-redux";
import "./App.css";

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <>
        {console.log("r")}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
