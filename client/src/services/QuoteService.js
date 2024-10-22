import { logger } from "@/utils/Logger.js"
import { the_simpsons_quote_api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class QuoteService {
  async quoteOfTheDay() {
    const response = await the_simpsons_quote_api.get('/quotes')
    logger.log(response.data)
    AppState.quote = response.data
  }
}

export const quoteService = new QuoteService()
