import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Data from './Data'
import View from './ViewDetails'
import Update from './UpdateDetails'

let r = createBrowserRouter(
  [{
    path: "/",
    element: <Home />,
    children: [{
      path: "create",
      element: <Create />
    }, {
      path: "data",
      element: <Data />,
    },
    {
      path: "view",
      element: <View />
    },
    {
      path: "update/:id",
      element: <Update />
    }
    ]
  }]
)
const App = () => {
  return (
    <RouterProvider router={r} />
  )
}

export default App