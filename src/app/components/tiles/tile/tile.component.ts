import {
  Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild,
  ViewContainerRef,
  InjectionToken,
} from '@angular/core';
import {Block, BlockInfo, BlockType} from "../../../entities/block";
import {CommonInfoTileComponent} from "../common-info.tile/common-info.tile.component";

@Component({
  selector: 'app-tile',
  entryComponents: [CommonInfoTileComponent],
  template: `
    <div #dynamicComponentContainer></div>
  `,
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  static BlockReference = new InjectionToken<Block>('block');

  @Input()
  block: Block;

  currentComponent = null;

  @ViewChild('dynamicComponentContainer', {read: ViewContainerRef})
  dynamicComponentContainer: ViewContainerRef;

  private tilesMap = new Map<BlockType, any>();

  constructor(private resolver: ComponentFactoryResolver) {
    this.tilesMap.set(BlockType.Info, CommonInfoTileComponent);
  }

  ngOnInit(): void {
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = [{provide: BlockInfo, useValue: new BlockInfo(this.block)}];
    let injector = Injector.create({
      providers: inputProviders,
      parent: this.dynamicComponentContainer.parentInjector,
    });

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(this.tilesMap.get(this.block.type));

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

}
