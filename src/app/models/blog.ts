export interface posts{
  title:string,
  content:string,
  picture:string,
  creation:string,
  blogPostId:number,
  likes:number,
  dislikes:number,
  liked:null,
  disliked:null,
  tags:any[]


}
export interface Blog {
  success:string,
  message:string,
  data:{
    posts:posts[]
  }
}
