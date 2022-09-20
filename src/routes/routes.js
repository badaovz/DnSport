import config from '../config';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Plans from '../pages/Plans';
import Trainers from '../pages/Trainers';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.gallery, component: Gallery },
    { path: config.routes.plans, component: Plans },
    { path: config.routes.trainers, component: Trainers },
    { path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
