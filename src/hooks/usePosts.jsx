import { useMemo } from "react";

export const useSortedPosts=(posts,sort)=>{
    const sortedPosts = useMemo(() => {
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))//новый массив старых постов
        } return posts;
      }, [sort, posts])

      return sortedPosts;
} //массив отсортированных постов

export const usePosts=(posts,sort,query)=>{

    const sortedPosts=useSortedPosts(posts,sort);//выборка отсортированных и отфильтрованных постов постов

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPosts],)
      return sortedAndSearchedPosts;
}