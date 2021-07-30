export class postService{
    posts = [
        {
          id: 1,
          id_user : 1,
          title : 'Desolation of mordor',
          imgpath: '../../assets/img/photo.jpg'
        },
        {
          id: 2,
          id_user : 2,
          title : 'Bathman arkman',
          imgpath: '../../assets/img/photo2.jpg'
        },
        {
          id: 2,
          id_user : 2,
          title : 'Bathman arkman',
          imgpath: '../../assets/img/photo2.jpg'
        },
        {
          id: 2,
          id_user : 2,
          title : 'Bathman arkman',
          imgpath: '../../assets/img/photo2.jpg'
        },
        {
          id: 2,
          id_user : 2,
          title : 'Bathman arkman',
          imgpath: '../../assets/img/photo2.jpg'
        },
        {
          id: 3,
          id_user : 3,
          title : 'Desolation of mordor',
          imgpath: '../../assets/img/photo.jpg'
        }
      ];
    GetPostById(id : number){
      const post = this.posts.find(
        (p)=>{
          return p.id === id;
        }
      );
      return post;
    }  
}