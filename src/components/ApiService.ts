// ApiService.ts
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export const fetchPosts = async (): Promise<Post[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  