import { BaggageOption } from '../../../../common/enums'


export interface ISearchInRadiusRequest {
  luggage_size?: BaggageOption
  number_of_people?: number
  page?: number
  spoken_languages?: string
  with_pets?: string
  lat?: number
  lon?: number
  radius?: number
}
