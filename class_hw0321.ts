/* 

(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요. 

친구가 물어봤을 때 어떻게 답해줄 것입니까

*/


class Userhw {
    private static x = 10; // private - extends된 class는 사용 불가능, 자식들도 사용 불가능
    public static y = 20; // static - 부모 class에 직접 부여됨(자식에게 안물려줌)
    protected z = 30; // protected - 현재 class {} 안에서 + extends class {} 안에서 사용가능, extends된 class는 사용 가능, 자식들 사용불가능
  }

  /* 
  
  1.필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y는 static 키워드가 붙었기 때문에 User.x 이런식으로만 접근해서 쓸 수 있다. User의 자식들은 x와 y를 쓸수 없다.
  2.private static x는 class 내부에서만 수정가능합니다.
  3.public static y는 class 내부 외부 상관없이 수정가능합니다.
  4.protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있다.


  
  */



  /* 
  
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 

그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

(조건) private static x = 10; 이 코드 수정금지 
  
  */


class Userhw2 {
    private static x :number = 10;
    public static y = 20;

    addOne(para :number){
        Userhw2.x += para
    }
    printX() {
        console.log(Userhw2.x)
    }
}

let userhwIns2 = new Userhw2();
userhwIns2.addOne(3);
userhwIns2.addOne(4);
userhwIns2.printX();


