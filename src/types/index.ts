export interface NavLink {
  href: string;
  label: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
