import USACollection from '../api/articles/USA.json'
import RUSSIACollection from '../api/articles/RUSSIA.json'
import KOREACollection from '../api/articles/KOREA.json'

export const USA = { 
  data: USACollection, 
  categories: ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology', 'COVID-19'],
  countries: ['USA', 'RUSSIA', 'KOREA']
}

export const RUSSIA = {
  data: RUSSIACollection,
  categories: ['Все', 'Экономика', 'Культура', 'Здоровье', 'Наука и техника', 'Спорт', 'Технология','COVID-19'],
  countries: ['США', 'Россия', 'Корея']
}

export const KOREA = { 
  data: KOREACollection,  
  categories: ['최신기사', '경제', '연예', '건강 ', '과학 ', '스포츠', '기술', 'COVID-19'],
  countries: ['미국', '러시아', '대한민국']
} 

export const countriesList = [['USA', 'США','미국',], ['RUSSIA','Россия','러시아'], ['KOREA','Корея', '대한민국']]