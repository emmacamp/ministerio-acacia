import BaseService from '../base';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class PostService extends BaseService {
  private readonly BASE_URL = 'posts';

  public async getPosts(): Promise<Post[]> {
    return this.get<Post[]>(this.BASE_URL);
  }

  public async getPost(id: number): Promise<Post> {
    return this.get<Post>(`${this.BASE_URL}/${id}`);
  }

  public async createPost(post: Omit<Post, 'id'>): Promise<Post> {
    return this.post<Omit<Post, 'id'>, Post>(this.BASE_URL, post);
  }

  public async updatePost(id: number, post: Partial<Post>): Promise<Post> {
    return this.put<Partial<Post>, Post>(`${this.BASE_URL}/${id}`, post);
  }

  public async deletePost(id: number): Promise<void> {
    return this.delete(`${this.BASE_URL}/${id}`);
  }
}

export default PostService;
