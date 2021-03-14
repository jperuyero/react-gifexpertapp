import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hook/useFetchGifs'
jest.mock('../../hook/useFetchGifs')


describe('Pruebas en el <GifGrid/>', () => {

  const category = 'One punch'

  test('debe de mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category}/>)

    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }]
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category}/>)

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('p').exists()).toBe(false)

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

  })


})
