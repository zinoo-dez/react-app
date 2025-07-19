import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { CategoryType } from '../types/type';

interface CategoryContextType {
     categories: CategoryType[];
     loading: boolean;
     setLoading: (loading: boolean) => void;
     error: string | null;
     setError: (error: string | null) => void;
}
const CategoryContext = createContext<CategoryContextType | null>(null); // default data 

interface CategoryProviderProps {
     children: ReactNode;
}
// to global state
export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
     const [categories, setCategories] = useState<CategoryType[]>([]);
     // console.log('categories****************************************', categories)
     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string | null>(null);
     const fetchCategories = async () => {
          setLoading(true);
          try {
               const response = await fetch('http://localhost:3007/api/categories');
               const data = await response.json();
               setCategories(data.allCategories);
          } catch (error) {
               setError(error as string);
          } finally {
               setLoading(false);
          }
     };
     useEffect(() => {
          fetchCategories();
     }, []);

     return (
          <CategoryContext.Provider value={{ categories, loading, setLoading, error, setError }}>
               {children}
          </CategoryContext.Provider>
     );
}
export const useCategories = () => {
     const context = useContext(CategoryContext);
     if (!context) {
          throw new Error('useCategories must be used within a CategoryProvider');
     }
     return context;
};
