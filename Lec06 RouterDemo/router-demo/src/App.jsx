
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Page3 from './Page3';
import Root from './Root';
import Page1 from './Page1';
import Page2 from './Page2';
import Page4 from './Page4';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //loader: rootLoader,
      children: [
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
        {
          path: "/page4",
          element: <Page4 />,
        },
      ],
    },
    {
      path: "/page3/:userId",
      element: <Page3 />
    },
    // |{
    //       path: "/page3/:userId",
    //       element: <Page3 />
    //     },

  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
