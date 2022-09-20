import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {

    return (
        <Router>
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Page = item.component;
                    return (
                        <Route
                            path={item.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                            key={index}
                        />
                    );
                })}
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
