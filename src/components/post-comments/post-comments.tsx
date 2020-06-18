import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'post-comments',
  styleUrl: 'post-comments.css',
  shadow: true,
})
export class PostComments {

  @Prop() author: string;
  @Prop() creacion: string;
  @Prop() texto: string;

  render() {
    return (
      <div class="card__footer">
      <div class="card__footer__comment">
        <p class="card__footer__comment__autor">{this.author} / {this.creacion}</p>
        <p class="card__footer__comment__text">{this.texto}</p>
      </div>
    </div>
    );
  }

}
