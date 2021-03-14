import { getGifs } from "../../helpers/getGifs"


  describe('Pruebas con getGifs Fetch', () => {


    test('debe de treaer 10 elementos', async() => {
      const gifs = await getGifs('One Punch')

      expect(gifs.length).toBe(10)
    })
    test('debe de treaer 0 elementos', async() => {
      const gifs = await getGifs('')

      // console.log(gifs)
      expect(gifs.length).toBe(0)
    })

  })
