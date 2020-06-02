export class Step {
  private isSearching:boolean
  private isEnded:boolean
  public constructor()
  {
    this.isSearching=false
    this.isEnded=false
  }
  public getIsSearching():boolean
  {
    return this.isSearching
  }
  public getIsEnded():boolean
  {
    return this.isEnded
  }
  public setIsSearching(x:boolean)
  {
    this.isSearching=x
  }
  public setIsEnded(x:boolean)
  {
    this.isEnded=x
  }
}
