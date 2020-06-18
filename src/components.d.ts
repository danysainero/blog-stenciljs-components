/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GridLayout {
    }
    interface HomeLayout {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PostComments {
        "author": string;
        "creacion": string;
        "texto": string;
    }
    interface PostDetail {
        "post": Object;
    }
    interface PostDetailComments {
        "commentDate": string;
        "comments": Object[];
    }
    interface PostList {
        "author": string;
        "post": string;
        "titulo": string;
    }
}
declare global {
    interface HTMLGridLayoutElement extends Components.GridLayout, HTMLStencilElement {
    }
    var HTMLGridLayoutElement: {
        prototype: HTMLGridLayoutElement;
        new (): HTMLGridLayoutElement;
    };
    interface HTMLHomeLayoutElement extends Components.HomeLayout, HTMLStencilElement {
    }
    var HTMLHomeLayoutElement: {
        prototype: HTMLHomeLayoutElement;
        new (): HTMLHomeLayoutElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPostCommentsElement extends Components.PostComments, HTMLStencilElement {
    }
    var HTMLPostCommentsElement: {
        prototype: HTMLPostCommentsElement;
        new (): HTMLPostCommentsElement;
    };
    interface HTMLPostDetailElement extends Components.PostDetail, HTMLStencilElement {
    }
    var HTMLPostDetailElement: {
        prototype: HTMLPostDetailElement;
        new (): HTMLPostDetailElement;
    };
    interface HTMLPostDetailCommentsElement extends Components.PostDetailComments, HTMLStencilElement {
    }
    var HTMLPostDetailCommentsElement: {
        prototype: HTMLPostDetailCommentsElement;
        new (): HTMLPostDetailCommentsElement;
    };
    interface HTMLPostListElement extends Components.PostList, HTMLStencilElement {
    }
    var HTMLPostListElement: {
        prototype: HTMLPostListElement;
        new (): HTMLPostListElement;
    };
    interface HTMLElementTagNameMap {
        "grid-layout": HTMLGridLayoutElement;
        "home-layout": HTMLHomeLayoutElement;
        "my-component": HTMLMyComponentElement;
        "post-comments": HTMLPostCommentsElement;
        "post-detail": HTMLPostDetailElement;
        "post-detail-comments": HTMLPostDetailCommentsElement;
        "post-list": HTMLPostListElement;
    }
}
declare namespace LocalJSX {
    interface GridLayout {
    }
    interface HomeLayout {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PostComments {
        "author"?: string;
        "creacion"?: string;
        "texto"?: string;
    }
    interface PostDetail {
        "post"?: Object;
    }
    interface PostDetailComments {
        "commentDate"?: string;
        "comments"?: Object[];
    }
    interface PostList {
        "author"?: string;
        "post"?: string;
        "titulo"?: string;
    }
    interface IntrinsicElements {
        "grid-layout": GridLayout;
        "home-layout": HomeLayout;
        "my-component": MyComponent;
        "post-comments": PostComments;
        "post-detail": PostDetail;
        "post-detail-comments": PostDetailComments;
        "post-list": PostList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "grid-layout": LocalJSX.GridLayout & JSXBase.HTMLAttributes<HTMLGridLayoutElement>;
            "home-layout": LocalJSX.HomeLayout & JSXBase.HTMLAttributes<HTMLHomeLayoutElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "post-comments": LocalJSX.PostComments & JSXBase.HTMLAttributes<HTMLPostCommentsElement>;
            "post-detail": LocalJSX.PostDetail & JSXBase.HTMLAttributes<HTMLPostDetailElement>;
            "post-detail-comments": LocalJSX.PostDetailComments & JSXBase.HTMLAttributes<HTMLPostDetailCommentsElement>;
            "post-list": LocalJSX.PostList & JSXBase.HTMLAttributes<HTMLPostListElement>;
        }
    }
}
