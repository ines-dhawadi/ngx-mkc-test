import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService<D = any> {
  protected url = "http://localhost:3000/";

  constructor(protected http: HttpClient) { }

  fetch(ressource: string) {
    if (!ressource)
      throw new Error("ressource is required!");
    return this.http.get(this.url + ressource);
  }

  create(ressource: string, data: D) {
    if (!ressource)
      throw new Error("ressource is required!");
    if (typeof data !== "object")
      throw new Error("data must be an object!");
    return this.http.post(this.url + ressource, data);
  }

  /** data will completly override the existing recod on db */
  update(ressource: string, data: D) {
    if (!ressource)
      throw new Error("ressource is required!");
    if (!(data as any)?.id)
      throw new Error("data must be an object and have contain an id property!");
    return this.http.put(this.url + ressource + '/' + (data as any)?.id, data);
  }

  delete(ressource: string, id: any) {
    if (!ressource)
      throw new Error("ressource is required!");
    if (id)
      throw new Error("id is required!");
    return this.http.delete(this.url + ressource + '/' + id);
  }
}
