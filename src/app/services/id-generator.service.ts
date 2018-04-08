import {Injectable} from "@angular/core";

@Injectable()
export class IdGeneratorService{
  private id = 57005;

  generateNewId(): string {
    return (this.id++).toString();
  }
}
