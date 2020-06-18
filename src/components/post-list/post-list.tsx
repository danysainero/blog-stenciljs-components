import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "post-list",
  styleUrl: "post-list.css",
  shadow: true,
})
export class PostList {

  @Prop() titulo: string;
  @Prop() author: string;
  @Prop() post: string;

  render() {
    return (
        <div class="card">
        <div class="card__header">
          <p class="card__header__info">
            Autor: {this.author}
          </p>
        </div>
        <div class="card__body">
          <p class="card__body__title">{this.titulo}</p>
          <div class="card__body__img">
            <slot name="card-img" />
          </div>
          <p class="card__body__text">{this.post}</p>
        </div>
      </div>
    );
  }
}
