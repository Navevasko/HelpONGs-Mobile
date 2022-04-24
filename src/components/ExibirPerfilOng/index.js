// function ExibirConteudo (vp1) {
//     if(vp1 == 1){
//       return(
//       <View className='Posts' style={{ width:"100%"}}>
//         <View style={[styles.card, styles.shadowProp]}>
//           <View style={{flexDirection:"row"}}>
//             <Image
//               source={require('../../assets/img/fotoDePerfil.jpeg')}
//               style={styles.fotoDePerfilPost}
//             />
//             <View style={{flexDirection:"column", marginTop:5}}>
//                 <Text style={styles.txtNomeUsuarioPost}>O tal do Jorg1nh00</Text>
//                 <Text style={styles.txtDataPost}>25 de fevereiro de 2022</Text>
//             </View>
//           </View>
//           <View style={{flexDirection:"column"}}>
//             <Text style={{color:"black"}}>
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//             </Text>
//             <Image
//               source={require('../../assets/img/post.jpg')}
//               style={styles.imgPost}
//             />        
//             <View style={styles.containerAcoesPost}>
//               <Icon
//                 name='thumbs-up'
//                 style={styles.iconsAcoesPost}
//               />
//               <Text>16</Text>
//               <Icon
//                 name='message-square'
//                 style={styles.iconsAcoesPost}
//               />
//               <Text>16</Text>
//               <Icon
//                 name='share-2'
//                 style={styles.iconsAcoesPost}
//               />
//             </View>                 
//           </View>
//         </View>
  
  
//                 <View style={[styles.card, styles.shadowProp]}>
//                   <View style={{flexDirection:"row"}}>
//                     <Image
//                       source={require('../../assets/img/fotoDePerfil.jpeg')}
//                       style={styles.fotoDePerfilPost}
//                     />
//                     <View style={{flexDirection:"column", marginTop:5}}>
//                     <Text style={styles.txtNomeUsuarioPost}>O tal do Jorg1nh00</Text>
//                 <Text style={styles.txtDataPost}>25 de fevereiro de 2022</Text>
//                     </View>
//                   </View>
//                   <View style={{flexDirection:"column"}}>
//                     <Text style={styles.txtDescricaoPosts}>
//                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//                     </Text>
//                     <Image
//                       source={require('../../assets/img/post.jpg')}
//                       style={styles.imgPost}
//                     />
//                     <View style={styles.containerAcoesPost}>
//                       <Icon
//                         name='thumbs-up'
//                         style={styles.iconsAcoesPost}
//                       />
//                       <Text>16</Text>
//                       <Icon
//                         name='message-square'
//                         style={styles.iconsAcoesPost}
//                       />
//                       <Text>16</Text>
//                       <Icon
//                         name='share-2'
//                         style={styles.iconsAcoesPost}
//                       />
//                     </View>
//                   </View>
//                 </View>
//       </View>
//       )
//     }else if(vp1 == 2){
//       return(
//         <View className='Eventos' style={{width:"100%"}}>
//           <View style={[styles.card, styles.shadowProp]}>
//           <View style={{flexDirection:"row"}}>
//             <Image
//               source={require('../../assets/img/fotoDePerfil.jpeg')}
//               style={styles.fotoDePerfilPost}
//             />
//             <View style={{flexDirection:"column", marginTop:5}}>
//                 <Text>O tal do Jorg1nh0</Text>
//                 <Text>25 de fevereiro de 2022</Text>
//             </View>
//           </View>
//           <View style={{flexDirection:"column"}}>
//             <Text>
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
//             </Text>
//             <Image
//               source={require('../../assets/img/download.jpeg')}
//               style={styles.imgPost}
//             />        
//             <View style={styles.containerEspecificacoesEventos}>
//               <View style={styles.containerEspecificacoesEventoDireito}>
//                 <View style={{flexDirection:"row", marginVertical:5}}>
//                   <Text style={styles.txtEspecificacoesEventosbolder}>Objetivo:</Text>
//                   <Text style={styles.txtEspecificacoesEventos}> Velit officia conseq</Text>
//                 </View> 
//                 <View style={{flexDirection:"row",  marginVertical:5}}>
//                   <Text style={styles.txtEspecificacoesEventosbolder}>Data e Hora:</Text>
//                   <Text style={styles.txtEspecificacoesEventos}> 26 de Janeiro às 12:00</Text>
//                 </View>     
//                 <View style={{flexDirection:"row", marginVertical:5 }}>
//                   <Text style={styles.txtEspecificacoesEventosbolder}>Quantidade de participantes:</Text>
//                   <Text style={styles.txtEspecificacoesEventos}> 101</Text>
//                 </View>
//                 <View style={{flexDirection:"row", marginVertical:5}}>
//                   <Text style={styles.txtEspecificacoesEventosbolder}>Status:</Text>
//                   <View style={styles.containerStatus}>
//                     <Text>Encerrado</Text>
//                   </View>
//                 </View> 
//               </View>
//               <View style={{flexDirection:"column", alignSelf:'flex-end', height:70}}>
//                 <View style={styles.btnCandidaturas}>
//                   <Text>Candidatar-se</Text>
//                 </View>
//                 <View style={styles.btnCandidaturas}>
//                   <Text>Participar</Text>
//                 </View>
//               </View>
              
//             </View>                      
//           </View>
//         </View>
//         </View>
//         )
//     }else{
//       return(
//         <View className='Vagas' style={{width:"100%"}}>
//           <View style={[styles.cardVagas, styles.shadowProp]}>
//             <View style={styles.containerDataDaVaga}>
//               <Image
//                 source={require('../../assets/img/fotoDePerfil.jpeg')}
//                 style={styles.fotoDePerfilVaga}
//               />
//               <View style={{flexDirection:"column", marginTop:5}}>
//                   <Text style={styles.txtNomeDeUsuarioVagas}>O tal do Jorg1nh0</Text>
//                   <Text style={styles.txtDataDaVaga}>25 de fevereiro de 2022</Text>
//               </View>
//             </View>
//             <View style={styles.containerTituloEDescricaoDaVaga}>
//             <Text style={styles.txtTituloVagas}>Professor de Informática</Text>
//             <Text style={styles.txtDescricaoVagas}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
//             <View style={styles.containerBtnVagas}>
//               <View style={styles.btnVagas}>
//                 <Text>Saiba Mais</Text>
//               </View>
//               <View style={styles.btnVagas}>
//                 <Text>Interesse</Text>
//               </View>
//             </View>
//           </View>
//           </View>
//         </View>
//         )
//     }
//   }

//   export {ExibirConteudo}