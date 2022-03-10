import { ok } from '@/aplication/helpers';
import { LoadUsersUC } from '@/domain/use-cases';
import { Controller } from '@/aplication/controllers';

import { Injectable } from '@nestjs/common'

@Injectable()
export class LoadUsersHandler extends Controller {
  constructor (private readonly loadUsersUC: LoadUsersUC) {
    super()
  }

  async perform (): Promise<Controller.Output> {
    const httpResponse = await this.loadUsersUC.execute()
    return ok(httpResponse)
  }
}