import {Injectable} from "@angular/core";

@Injectable()
export class IdGeneratorService{
  id = 57005;

  generateNewId(): string {
    return (this.id++).toString();
  }
}
