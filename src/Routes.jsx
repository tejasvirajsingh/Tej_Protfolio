import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import DynamicHomepage from './pages/dynamic-homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<DynamicHomepage />} />
        <Route path="/dynamic-homepage" element={<DynamicHomepage />} />
        <Route path="/projects" element={<DynamicHomepage />} />
        <Route path="/about" element={<DynamicHomepage />} />
        <Route path="/blog" element={<DynamicHomepage />} />
        <Route path="/contact" element={<DynamicHomepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;