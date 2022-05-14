
const FAKE_USER_DATA = {
    Groot: {
      name: 'Groot Burrall',
      bio: "I enjoy hiding in plain sight, and hissing at my buddy Rollins",
      profilePictureUrl:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_59/f_auto,q_auto,w_1100/v1628778532/shape/mentalfloss/87226-gettyimages-1247734973.jpg',
      friends: ['Henry','Rollins'],
    },
    Rollins: {
      name: 'Rollins Burrall',
      bio: "I'm a small animal and I like to play with my bird toy. On the weekends I hang out with my cool Dad! I dont care much for my brother Groot though hes always hissing at me",
      profilePictureUrl:
        'https://www.k9ofmine.com/wp-content/uploads/2021/03/white-colored-maltese-850x520.jpg',
      friends: ['Henry'],
    },
    Henry: {
      name: 'Henry Kiser',
      bio: "I'm a Bearded dragon. You'll love me. I like sun bathing and eating greens such as kale and spinach",
      profilePictureUrl:
        'https://m.media-amazon.com/images/I/51eGV4guQnL._AC_SY355_.jpg',
      friends: ['Groot', 'Rollins'],
    },
  };
  
  const timeoutByFetchId = new Map();
  
  class Fetch {
    constructor() {
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2),
      });
    }
  }
  
  export function fetchUserData(username, callback) {
    if (!FAKE_USER_DATA.hasOwnProperty(username)) {
      throw new Error(
        'Invalid username. Make sure it is "Groot", "Rollins", or "Henry".'
      );
    }
  
    const fetch = new Fetch();
  
    const delay = Math.floor(Math.random() * 1000) + 500;
    const timeout = setTimeout(() => {
      timeoutByFetchId.delete(fetch._id);
      callback(FAKE_USER_DATA[username]);
    }, delay);
  
    timeoutByFetchId.set(fetch._id, timeout);
  
    return fetch;
  }
  
  export function cancelFetch(fetch) {
    if (!fetch || typeof fetch !== 'object') {
      return;
    }
    const timeout = timeoutByFetchId.get(fetch._id);
    clearTimeout(timeout);
    timeoutByFetchId.delete(fetch._id);
  }