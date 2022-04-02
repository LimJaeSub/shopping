import {rest} from 'msw';

export const handlers = [
    rest.get(`http://localhost:400/products`,(req,res,ctx)=>{ // get request (req,res,ctx) from localhost
        return res( //응답 반환
            ctx.json([ // msw 모의 응답 상태 반환(요청이 오면 해당 내용을 반환시켜줌)
                {
                    name:"America",
                    imagePath:"/images/america.jpeg"
                },
                {
                    name:"England",
                    imagePath:"/images/england.jpeg"
                }
            ])
        )
    }),
    rest.get(`http://localhost:4000/options`,(req,res,ctx)=>{
        return res(
            ctx.json([
                {
                    name:"Insurance"
                },
                {
                    name:"Dinner"
                }
            ])
        )
    })
]
