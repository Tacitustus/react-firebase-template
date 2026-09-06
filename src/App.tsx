
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { HomePage } from '@/components/pages/HomePage';

/**
 * @description アプリケーションのルートコンポーネント
 * @returns {React.ReactElement} App要素
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          {/* 追加のルートはここに記述 */}
          <Route path="*" element={<div className="p-10 text-center">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
