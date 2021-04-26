export class Chocolates
{
  get main_groups(): string {
    return <string>this._main_groups;
  }

  set main_groups(value: string) {
    this._main_groups = value;
  }

  get item(): string {
    return <string>this._item;
  }

  set item(value: string) {
    this._item = value;
  }

  get price(): number {
    return <number>this._price;
  }

  set price(value: number) {
    this._price = value;
  }
  private _main_groups: string | undefined;
  private _item: string | undefined;
  private _price: number | undefined;
}
