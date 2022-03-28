import { Injectable } from "@nestjs/common";
import { strapiClient } from "./config";
import { Pages } from "./helpers";


@Injectable()
export class StrapiClientService<T> {
  async getPage(page: Pages): Promise<T> {
    const res = await strapiClient.get(page);
    console.log(res.data);
    return res.data;
  }
}