import { Component, Input } from '@angular/core'
import { optimizeImage } from '@/optimizer'

@Component({
  selector: 'app-optimized-image',
  template: `<img [src]="optimizedSrc" [alt]="alt" [width]="width" [height]="height" />`
})
export class OptimizedImageComponent {
  @Input() src!: string
  @Input() alt: string = ''
  @Input() quality: number = 80
  @Input() width: number = 800
  @Input() height: number = 600
  @Input() format: string = ''

  get optimizedSrc() {
    return optimizeImage(this.src, {
      quality: this.quality,
      width: this.width,
      height: this.height,
      format: this.format
    })
  }
}
