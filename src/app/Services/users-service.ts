export class usersService{
    users = [
        {
          id: 1,
          name : 'Ak Akshan',
          imgpath: '../../assets/img/photo2.jpg'
        },
        {
          id: 2,
          name : 'Dead-Urox',
          imgpath: '../../assets/img/photo.jpg'
        },
        {
          id: 3,
          name : 'Onfua',
          imgpath: '../../assets/img/photo.jpg'
        }
      ];
      GetUserById(id : number){
        const user = this.users.find(
            (user) => {
              return user.id === id
            }
          );
          return user;
      }
}