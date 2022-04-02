import {render, screen} from "@testing-library/react";
import Type from '../Type'
import {server} from '../../../mocks/server'
import { rest } from "msw";


test("bring image from localhost:4000", async () => {
    render(<Type orderType="products" />);
  
    // 이미지 찾기
    const productImages = await screen.findAllByRole("img", {
      name: /product$/i,
    });
    expect(productImages).toHaveLength(2);
  
    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(["America product", "England product"]);
  });

test("if localhost get error(500)", async()=>{
    server.resetHandlers(
        rest.get(`http://localhost:4000/products`,(req,res,ctx)=>{
            return res(ctx.status(500));
        })
    )

    render(<Type orderType="products" />)

    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다");
})

test("fetch option information from server",async ()=>{
    render(<Type orderType="options" />)

    //체크박스 가져오기
    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
})

