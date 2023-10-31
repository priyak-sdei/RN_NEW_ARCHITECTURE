//
//  CustomModule.m
//  BaseProject
//
//  Created by Kajal Verma on 26/10/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(CustomModule, NSObject)
RCT_EXTERN_METHOD(simpleMethod)

RCT_EXTERN_METHOD(simpleMethodReturns:
                  (RCTResponseSenderBlock) callback
                  )
RCT_EXTERN_METHOD(simpleMethodWithParams:
                  (NSString *) param
                  callback: (RCTResponseSenderBlock)callback
                  )
RCT_EXTERN_METHOD(
                  resolvePromise:(RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject
                  )



@end
